import View from './View';
import previewView from './previewView';

import icons from 'url:../../img/icons.svg'; // Parcel 2

class ResultView extends View {
  _parentElement = document.querySelector('.results');
  _errorMessage = 'No recipe found for your query! Please try again :D';
  _message = '';

  _generateMarkup() {
    return this._data
      .map(bookmark => previewView.render(bookmark, false))
      .join('');
  }
}

export default new ResultView();
