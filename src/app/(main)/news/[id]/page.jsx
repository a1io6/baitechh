'use client'
import { useParams, useRouter } from "next/navigation";
import { useBanner } from "@/lib/news/hooks/hooks";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function NewsDetailPage() {
  const { t } = useTranslation();
  const params = useParams();
  const router = useRouter();
  const { data, isLoading } = useBanner();
  const newsId = parseInt(params.id);
  
  const newsItem = data?.find(item => item.id === newsId);

  if (isLoading) {
    return (
      <div className="max-w-[1280px] mx-auto px-4 py-8">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-1/4 mb-4"></div>
          <div className="h-96 bg-gray-200 rounded mb-6"></div>
          <div className="h-12 bg-gray-200 rounded w-3/4 mb-4"></div>
          <div className="space-y-3">
            <div className="h-4 bg-gray-200 rounded w-full"></div>
            <div className="h-4 bg-gray-200 rounded w-full"></div>
            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
          </div>
        </div>
      </div>
    );
  }

  if (!newsItem) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8 text-center">
        <h1 className="text-2xl font-bold text-gray-700 mb-4">
          {t('newsDetail.notFound.title')}
        </h1>
        <button
          onClick={() => router.back()}
          className="text-[#0E2E5B] hover:underline"
        >
          {t('newsDetail.notFound.backButton')}
        </button>
      </div>
    );
  }

  const imageUrl = newsItem.existing_images?.[0]?.image;

  return (
    <div className="max-w-[1280px] mx-auto px-4 py-8">
      <button
        onClick={() => router.back()}
        className="flex items-center gap-2 text-[#0E2E5B] hover:underline mb-6 transition-colors"
      >
        <ArrowLeft size={20} />
        <span>{t('newsDetail.backButton')}</span>
      </button>

      {imageUrl ? (
        <div className="relative w-full h-[400px] md:h-[500px] rounded-lg overflow-hidden mb-6">
          <Image
            src={imageUrl}
            alt={newsItem.title || t('newsDetail.imageAlt')}
            fill
            className="object-cover"
            priority
          />
        </div>
      ) : (
        <div className="w-full h-[400px] md:h-[500px] bg-gradient-to-tr from-gray-300 to-gray-200 rounded-lg mb-6 flex items-center justify-center">
          <span className="text-gray-400 text-lg">{t('newsDetail.noImage')}</span>
        </div>
      )}

      {newsItem.category_display && (
        <div className="mb-4">
          <span className="inline-block bg-[#0E2E5B] text-white text-sm px-3 py-1 rounded-full">
            {t('newsDetail.categoryBadge')}
          </span>
        </div>
      )}

      <h1 className="text-2xl md:text-4xl font-bold text-[#1e293b] mb-4">
        {newsItem.title || t('newsDetail.noTitle')}
      </h1>

      {newsItem.created_at && (
        <div className="text-gray-500 text-sm mb-6">
          {new Date(newsItem.created_at).toLocaleDateString(
            t('newsDetail.locale') || 'ru-RU', 
            {
              day: 'numeric',
              month: 'long',
              year: 'numeric'
            }
          )}
        </div>
      )}

      <div className="prose prose-lg max-w-none text-[#64748b] leading-relaxed">
        {newsItem.description || t('newsDetail.noDescription')}
      </div>
    </div>
  );
}