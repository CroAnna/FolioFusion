import { createClient } from "@/utils/supabase/client";

export async function deleteUnusedImages(images) {
  const supabase = createClient();
  const res = await Promise.all(
    images.map(async (image) => {
      console.log("brisem " + image);
      let relativePath = image.split("/storage/v1/object/public/images/")[1];
      relativePath = relativePath.replace(/%20/g, " ");
      // console.log("Relative Path: " + relativePath);

      const { data, error } = await supabase.storage
        .from("images")
        .remove([relativePath]);

      console.log(data);
      console.log(error);
    })
  );
  return { res };
}
