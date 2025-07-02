interface PostTagsProps {
  tags: string[];
}

const PostTags: React.FC<PostTagsProps> = ({ tags }) => (
  <div className='flex flex-wrap gap-1'>
    {tags.map((tag, i) => (
      <span
        key={i}
        className='border border-neutral-300 px-2 rounded-md text-xs text-neutral-900 font-normal'
      >
        {tag}
      </span>
    ))}
  </div>
);

export default PostTags;
