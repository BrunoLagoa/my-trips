export type ImageProps = {
  url: string;
  height: number;
  width: number;
};

export type PlacesTemplateProps = {
  place: {
    slug: string;
    name: string;
    description: {
      html: string;
    };
    gallery: ImageProps[];
  };
};

export default function PlacesTemplate({ place }: PlacesTemplateProps) {
  return (
    <div>
      <h1>{place.name}</h1>
      <div dangerouslySetInnerHTML={{ __html: place.description.html }} />

      {place.gallery.map((image, index) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          key={index}
          src={image.url}
          alt={place.name}
          width={image.width}
          height={image.height}
        />
      ))}
    </div>
  );
}
