"use client";

import { useEffect } from "react";
import { siteConfig } from "@/data/seo";

interface PageMetadataProps {
  title: string;
  description: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
}

function upsertMeta(
  selector: string,
  attribute: string,
  value: string,
  content: string
) {
  let el = document.querySelector(selector) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attribute, value);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

export function PageMetadata({
  title,
  description,
  ogTitle,
  ogDescription,
  ogImage,
}: PageMetadataProps) {
  useEffect(() => {
    const ogImg = ogImage || siteConfig.ogImage;
    const fullUrl = ogImg.startsWith("http")
      ? ogImg
      : `${siteConfig.url}${ogImg}`;

    document.title = title;

    upsertMeta("meta[name='description']", "name", "description", description);
    upsertMeta(
      "meta[property='og:title']",
      "property",
      "og:title",
      ogTitle || title
    );
    upsertMeta(
      "meta[property='og:description']",
      "property",
      "og:description",
      ogDescription || description
    );
    upsertMeta("meta[property='og:image']", "property", "og:image", fullUrl);
    upsertMeta(
      "meta[name='twitter:card']",
      "name",
      "twitter:card",
      "summary_large_image"
    );
    upsertMeta(
      "meta[name='twitter:title']",
      "name",
      "twitter:title",
      ogTitle || title
    );
    upsertMeta(
      "meta[name='twitter:description']",
      "name",
      "twitter:description",
      ogDescription || description
    );
    upsertMeta("meta[name='twitter:image']", "name", "twitter:image", fullUrl);
  }, [title, description, ogTitle, ogDescription, ogImage]);

  return null;
}
