import { DevToPost } from "@/types"
import { FC } from "react"

import { IoIosHeartEmpty as HeartIcon } from "react-icons/io"
import { GoComment as CommentIcon } from "react-icons/go"

const BlogCard: FC<DevToPost> = ({
  title,
  description,
  readable_publish_date,
  url,
  comments_count,
  public_reactions_count,
  cover_image,
  reading_time_minutes,
  tag_list,
}) => (
  <a
    href={url}
    target="_blank"
    className="flex flex-col border w-80 gap-4 bg-white/[0.02] hover:bg-white/[0.04] transition backdrop-blur-[4px]  border-opacity-10 border-gray-500"
  >
    <img src={cover_image} alt={title} className="w-full" />
    <div className="flex flex-col gap-2 px-4">
      <h3 className="text-slate-300 font-semibold line-clamp-3">{title}</h3>
      <p className="text-sm text-slate-400 line-clamp-4">{description}</p>
    </div>
    <div className="flex flex-wrap gap-2 px-4">
      {tag_list.map((tag) => (
        <span key={tag} className="text-xs text-slate-500 bg-slate-800 px-2 py-1">
          {tag}
        </span>
      ))}
    </div>
    <div className="flex-1" />
    <div className="flex justify-between items-center mt-1 px-4 pb-4">
      {!!public_reactions_count && (
        <p className="flex gap-2 text-sm justify-center items-center text-slate-500 px-2">
          <HeartIcon size={16} /> {public_reactions_count}
        </p>
      )}
      {!!comments_count && (
        <p className="flex gap-2 text-sm justify-center items-center text-slate-500 px-2">
          <CommentIcon size={16} /> {comments_count}
        </p>
      )}
      {!!reading_time_minutes && (
        <p className="flex gap-2 text-sm justify-center items-center text-slate-500 px-2">
          {reading_time_minutes} min
        </p>
      )}
      {!!readable_publish_date && (
        <p className="flex gap-2 text-sm justify-center items-center text-slate-500 px-2">
          {readable_publish_date}
        </p>
      )}
    </div>
  </a>
)

export default BlogCard
