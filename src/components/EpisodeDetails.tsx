import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function EpisodeDetails() {
  return (
    <Card className="p-6 mb-8">
      <h2 className="text-3xl font-bold mb-4">The Lost Prima Ballerina</h2>
      <div className="flex flex-wrap gap-2 mb-4">
        <Badge>Drama</Badge>
        <Badge variant="secondary">Dance</Badge>
        <Badge variant="outline">2024</Badge>
      </div>
      <p className="text-muted-foreground mb-4">
        Step into the enchanting world of professional ballet with "The Lost Prima Ballerina," a compelling miniseries that unveils the raw truth behind the graceful façade of classical dance. Following the journey of a renowned prima ballerina at the height of her career, this gripping drama explores the price of perfection and the courage to redefine oneself when everything falls apart. The Lost Prima Ballerina masterfully weaves together themes of passion, sacrifice, and redemption as our protagonist faces career-threatening injuries, fierce competition, and personal demons. Set against the backdrop of one of the world's most prestigious ballet companies, this emotionally charged series delves deep into the physical and psychological demands of professional dance, while offering an intimate look at the relationships that both sustain and challenge artists in their pursuit of excellence. Through stunning choreography and powerful performances, The Lost Prima Ballerina captures the raw intensity of ballet at its highest level, from the grueling daily rehearsals to the breathtaking stage performances. As the story unfolds, viewers witness the protagonist's transformation from a celebrated prima ballerina to a woman questioning everything she's ever known, while battling the cutthroat politics of the dance world and confronting long-buried family secrets that threaten to destroy her carefully constructed life. This critically acclaimed series not only showcases the ethereal beauty of classical ballet but also exposes the grit, determination, and resilience required to survive in this demanding art form.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
        <div>
          <span className="text-muted-foreground">Director:</span>
          <p className="font-medium">Sofia Laurent</p>
        </div>
        <div>
          <span className="text-muted-foreground">Stars:</span>
          <p className="font-medium">Isabella Chen, Marcus Rivera</p>
        </div>
        <div>
          <span className="text-muted-foreground">Rating:</span>
          <p className="font-medium">9.2/10</p>
        </div>
        <div>
          <span className="text-muted-foreground">Episodes:</span>
          <p className="font-medium">8</p>
        </div>
      </div>
    </Card>
  );
}