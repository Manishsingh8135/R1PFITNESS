// components/ImageComponent.tsx
interface ImageComponentProps {
    src: string;
    className?: string;
  }
  
  export const ImageComponent: React.FC<ImageComponentProps> = ({ src, className }) => {
    return (
      <div className={className}>
        <img
          alt="gallery"
          className="block h-full w-full rounded-lg 2xl:rounded-2xl object-cover object-center"
          src={src}
        />
      </div>
    );
  };