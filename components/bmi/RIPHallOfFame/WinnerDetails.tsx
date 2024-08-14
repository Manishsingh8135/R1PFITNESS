import React from 'react';
import { Winner } from '@/types/hallOfFameTypes';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from "@/ /ui/dialog";
import { FaInstagram, FaTwitter, FaFacebook } from 'react-icons/fa';

interface WinnerDetailsProps {
  winner: Winner;
  onClose: () => void;
}
interface WinnerDetailsProps {
    winner: Winner;
    onClose: () => void;
  }
  
  const WinnerDetails: React.FC<WinnerDetailsProps> = ({ winner, onClose }) => {
    return (
      <Dialog open={true} onOpenChange={onClose}>
        <DialogContent className="bg-gray-800 text-white border border-amber-400 max-w-3xl">
          <DialogHeader>
            <DialogTitle className="text-3xl text-amber-400">{winner.name}</DialogTitle>
          </DialogHeader>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <img src={winner.image} alt={winner.name} className="w-full h-64 object-cover rounded" />
              <div className="mt-4 flex justify-center space-x-4">
                {winner.socialMedia.instagram && (
                  <a href={`https://instagram.com/${winner.socialMedia.instagram}`} target="_blank" rel="noopener noreferrer">
                    <FaInstagram className="text-2xl text-amber-400 hover:text-amber-300" />
                  </a>
                )}
                {winner.socialMedia.twitter && (
                  <a href={`https://twitter.com/${winner.socialMedia.twitter}`} target="_blank" rel="noopener noreferrer">
                    <FaTwitter className="text-2xl text-amber-400 hover:text-amber-300" />
                  </a>
                )}
                {winner.socialMedia.facebook && (
                  <a href={`https://facebook.com/${winner.socialMedia.facebook}`} target="_blank" rel="noopener noreferrer">
                    <FaFacebook className="text-2xl text-amber-400 hover:text-amber-300" />
                  </a>
                )}
              </div>
            </div>
            <div>
              <p className="text-lg mb-2"><span className="font-bold text-amber-400">Category:</span> {winner.category}</p>
              <p className="text-lg mb-2"><span className="font-bold text-amber-400">Year:</span> {winner.year}</p>
              <p className="text-lg mb-2"><span className="font-bold text-amber-400">Challenges Won:</span> {winner.challengesWon}</p>
              <p className="text-lg mb-2"><span className="font-bold text-amber-400">Challenges Started:</span> {winner.challengesStarted}</p>
              <p className="text-lg mb-2"><span className="font-bold text-amber-400">Height:</span> {winner.height} cm</p>
              <p className="text-lg mb-2"><span className="font-bold text-amber-400">Weight:</span> {winner.weight} kg</p>
              <div className="mt-4">
                <h3 className="text-xl font-bold text-amber-400 mb-2">Achievements</h3>
                <ul className="list-disc list-inside">
                  {winner.achievements.map((achievement, index) => (
                    <li key={index} className="text-lg mb-1">{achievement}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <p className="text-lg mt-6">{winner.bio}</p>
          <DialogClose asChild>
            <button className="mt-6 bg-amber-400 text-black px-4 py-2 rounded hover:bg-amber-500">
              Close
            </button>
          </DialogClose>
        </DialogContent>
      </Dialog>
    );
  };
  
  export default WinnerDetails;