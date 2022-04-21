// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import app from "../../lib/firebase"
import {doc, getFirestore , setDoc} from "firebase/firestore";
export default async function  handler(req, res) {
  const db = getFirestore(app);
  const cityRef = doc(db, 'works', 'ONLINE-QR-TICKET');
  await setDoc(cityRef, {
    title : "QR Ticket",
    content : "Online QR Ticket creating and scanning system!",
    date : "April 2022 - ?",
    image : 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gA+Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBkZWZhdWx0IHF1YWxpdHkK/9sAQwAIBgYHBgUIBwcHCQkICgwUDQwLCwwZEhMPFB0aHx4dGhwcICQuJyAiLCMcHCg3KSwwMTQ0NB8nOT04MjwuMzQy/9sAQwEJCQkMCwwYDQ0YMiEcITIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIy/8AAEQgBaAFoAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A9/ooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD4Aoor7/oA+AKK+/wCigD4Aor7/AKKAPgCvv+vgCvv+gAor4Ar7/oA+AK+/6+AKKAPv+iiigAoor4AoAK+/6KKAPgCiiigAr7/or4AoA+/6KKKAPgCvv+iigD4Aor7/AKKAPgCvv+vgCvv+gD4Aoor7/oA+AKK+/wCigD4Aor7/AKKAPgCvv+vgCvv+gAooooAKKKKACiiigAooooA+AK+/6+AK+/6APgCiiigAr7/r4Ar7/oA+AK+/6+AK+/6ACiiigD4Aor7/AK+AKACivv8Ar4AoAK+/6+AK+/6APgCvv+iigAor4AooA+/6KK+AKAPv+ivgCvv+gAor4Ar7/oA+AKKK+/6APgCvv+iigD4Ar7/r4Ar7/oA+AKKKKACvv+vgCvv+gD4Ar7/r4Ar7/oAKKKKACiiigAooooAKKKKAPgCvv+vgCvv+gD4Aor7/AKKAPgCvv+iigD4Ar7/r4Ar7/oAKK+AKKAPv+ivgCigAr7/r4Ar7/oA+AK+/6KKACivgCigD7/r4Aor7/oAKK+AK+/6APgCivv8Ar4AoAK+/6+AK+/6ACvgCvv8AooA+AK+/6+AK+/6APgCvv+vgCvv+gD4Aor7/AKKAPgCvv+iigD4Ar7/r4Ar7/oAKKKKACiiigAooooAKKKKAPgCivv8AooA+AKK+/wCigD4Aor7/AKKAPgCvv+iigD4Ar7/r4Ar7/oA+AK+/6+AKKACvv+ivgCgAr7/r4Ar7/oA+AK+/6+AKKACvv+iigD4Ar7/or4AoAK+/6+AKKACvv+vgCigAr7/oooA+AK+/6KKAPgCivv8AooA+AKK+/wCigD4Aor7/AKKAPgCvv+iigAooooAKKKKACiiigAooooAKKK+AKAPv+ivgCigAoor7/oA+AKK+/wCigAr4AoooAKKK+/6APgCvv+iigAr4Ar7/AKKAPgCvv+iigD4Ar7/r4AooAK+/6+AKKAPv+vgCvv8AooA+AKK+/wCvgCgD7/r4Aor7/oA+AK+/6KKAPgCiivv+gAoor4AoA+/6+AKK+/6ACiiigAooooAKKKKACiiigAooooA+AKKKKACvv+vgCigAor7/AKKAPgCivv8Ar4AoA+/6+AKK+/6APgCvv+iigD4Aor7/AK+AKACiivv+gAor4AooAK+/6+AK+/6APgCvv+iigD4AooooA+/6K+AK+/6APgCivv8Ar4AoA+/6+AKKKAPv+iivgCgAr7/r4Ar7/oAKK+AKKAPv+ivgCvv+gAooooAKKKKACiiigAooooAK+AK+/wCvgCgAooooAK+/6+AKKACivv8Ar4AoAK+/6+AKKAPv+vgCvv8Ar4AoA+/6KK+AKACvv+ivgCgD7/r4Ar7/AKKACivgCigD7/r4Aor7/oAKK+AK+/6APgCvv+vgCigD7/oor4AoA+/6KK+AKACivv8AooAKK+AK+/6APgCvv+vgCvv+gD4Ar7/oooAKKKKACiiigAooooAKKKKAPgCiivv+gD4Aor7/AK+AKAPv+vgCvv8AooA+AK+/6K+AKAPv+vgCiigAr7/or4AoAK+/6KKACvgCvv8Ar4AoAK+/6+AKKACivv8Ar4AoAK+/6+AKKAPv+ivgCigAr7/oooAK+AKKKAPv+vgCiigD7/r4Ar7/AK+AKACivv8AooA+AK+/6+AK+/6ACivgCvv+gAooooAKKKKACiiigAooooA+AK+/6K+AKACivv8AooA+AKKK+/6APgCvv+iigD4Aor7/AK+AKACivv8AooA+AK+/6+AK+/6APgCiiigAr7/or4AoAKK+/wCigAooooA+AK+/6KKAPgCvv+ivgCgAooooA+/6+AKK+/6APgCvv+iigAr4Aor7/oA+AKKK+/6APgCvv+iigAooooAKKKKACiiigAooooAKK+AKKAPv+vgCvv8Ar4AoAKK+/wCvgCgAor7/AKKACiivgCgD7/r4Aor7/oA+AKKK+/6ACvgCivv+gD4Aor7/AKKACvgCiigD7/oor4AoA+/6KKKAPgCvv+iigAr4AoooAKK+/wCigD4Aor7/AKKACivgCvv+gD4Ar7/r4AooA+/6KKKACiiigAooooAKKKKACiiigAor4AooAKKKKAPv+vgCvv8AooA+AK+/6KKACivgCigAr7/r4AooA+/6+AK+/wCigAr4Aor7/oAKK+AK+/6ACvgCivv+gAor4Ar7/oAK+AKKKACiiigD7/oor4AoA+/6+AK+/wCigD4Ar7/oooAKK+AKKACivv8AooA+AK+/6KKACiiigAooooAKKKKACiiigD4Ar7/oooAK+AK+/wCigD4Aoor7/oA+AKK+/wCigAr4AoooAKK+/wCigD4Ar7/r4AooA+/6KK+AKACivv8AooAKKKKACvgCivv+gD4Ar7/or4AoA+/6K+AK+/6ACvgCivv+gAr4Ar7/AKKACiivgCgD7/oor4AoA+/6K+AK+/6ACivgCvv+gAooooAKKKKACiiigAooooAK+AK+/wCvgCgD7/r4AoooAK+/6+AK+/6APgCvv+iigD4AooooA+/6KKKACvgCvv8Ar4AoA+/6+AKKKACivv8AooA+AK+/6+AK+/6ACiivgCgD7/r4Ar7/AKKACvgCiigAor7/AKKACivgCigAooooAK+/6+AKKACvv+ivgCgAr7/oooAKKKKACiiigAooooAKKKKAPgCiiigAor7/AK+AKAPv+vgCivv+gD4Aor7/AK+AKAPv+ivgCvv+gD4Ar7/r4AooA+/6K+AKKACvv+vgCvv+gAr4Ar7/AKKACvgCivv+gD4Ar7/r4AooAKKKKACivv8AooAKKKKAPgCivv8Ar4AoAKKKKAPv+vgCvv8AooA+AK+/6+AK+/6ACivgCvv+gAooooAKKKKACiiigAooooAKKKKACvgCvv8AooAKKKKAPgCvv+iigD4AooooAKKK+/6ACvgCivv+gD4Ar7/or4AoA+/6+AKK+/6APgCvv+vgCigD7/or4Ar7/oA+AK+/6+AK+/6APgCvv+iigD4Aoor7/oA+AKKK+/6APgCivv8AooA+AK+/6+AKKACivv8Ar4AoA+/6KKKACiiigAooooAKKKKACiiigD4Aoor7/oA+AKK+/wCigD4Aor7/AKKAPgCvv+vgCvv+gD4Ar7/r4AooA+/6KK+AKACivv8AooAKK+AK+/6APgCvv+ivgCgD7/r4Ar7/AKKAPgCivv8Ar4AoAKK+/wCigD4Aoor7/oA+AK+/6KKAPgCvv+vgCvv+gD4Ar7/oooA+AKKK+/6APgCvv+vgCigD7/or4Ar7/oAKKKKACiiigAooooAKKKKAPgCvv+vgCvv+gD4AooooAK+/6+AK+/6APgCvv+vgCvv+gD4Ar7/oooAKKK+AKAPv+vgCvv8Ar4AoA+/6+AK+/wCvgCgAor7/AKKAPgCivv8Ar4AoA+/6K+AK+/6APgCivv8AooA+AK+/6K+AKAPv+ivgCigAoor7/oA+AKKK+/6APgCivv8AooA+AKKK+/6ACiiigAooooAKKKKACiiigAooooA+AK+/6+AK+/6APgCivv8AooA+AK+/6KKAPgCvv+vgCvv+gAr4Ar7/AKKAPgCivv8Ar4AoAKKK+/6APgCivv8Ar4AoAKK+/wCvgCgD7/oor4AoAK+/6+AK+/6APgCvv+vgCvv+gAr4Aor7/oAK+AK+/wCvgCgD7/r4Ar7/AKKAPgCivv8Ar4AoA+/6K+AK+/6ACvgCiigD7/ooooAKKKKACiiigAooooAKKKKAPgCivv8AooA+AKK+/wCigD4Aor7/AKKAPgCvv+iigAr4Ar7/AKKACvgCvv8AooA+AK+/6KKAPgCvv+iigD4Ar7/oooAK+AK+/wCigD4Ar7/oooA+AKK+/wCigAr4Ar7/AKKACvgCvv8AooAK+AK+/wCigD4Ar7/oooAKKKKAPgCivv8AooA+AK+/6KKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAP//Z',
    type : "Software Project",
    extra : "highly scalable QR system for online tickets!",
    status : "🟢",
  }) 
  res.status(200).json("Success!")
}