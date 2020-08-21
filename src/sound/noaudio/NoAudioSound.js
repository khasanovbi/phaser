/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @author       Pavle Goloskokovic <pgoloskokovic@gmail.com> (http://prunegames.com)
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

var BaseSound = require('../BaseSound');
var Class = require('../../utils/Class');

var returnFalse = function ()
{
    return false;
};

var returnNull = function ()
{
    return null;
};

/**
 * @classdesc
 * No audio implementation of the sound. It is used if audio has been
 * disabled in the game config or the device doesn't support any audio.
 *
 * It represents a graceful degradation of sound logic that provides
 * minimal functionality and prevents Phaser projects that use audio from
 * breaking on devices that don't support any audio playback technologies.
 *
 * @class NoAudioSound
 * @extends Phaser.Sound.BaseSound
 * @memberof Phaser.Sound
 * @constructor
 * @since 3.0.0
 *
 * @param {Phaser.Sound.NoAudioSoundManager} manager - Reference to the current sound manager instance.
 * @param {string} key - Asset key for the sound.
 * @param {Phaser.Types.Sound.SoundConfig} [config={}] - An optional config object containing default sound settings.
 */
var NoAudioSound = new Class({

    Extends: BaseSound,

    initialize:

    function NoAudioSound (manager, key, config)
    {
        BaseSound.call(this, manager, key, config);

        this.mute = false;
        this.volume = 1;
        this.rate = 1;
        this.detune = 0;
        this.seek = 0;
        this.loop = false;
        this.markers = {};
        this.currentMarker = null;
        this.pendingRemove = false;
    },

    /**
     * @method Phaser.Sound.NoAudioSound#addMarker
     * @since 3.0.0
     *
     * @param {Phaser.Types.Sound.SoundMarker} marker - Marker object.
     *
     * @return {boolean} false
     */
    // eslint-disable-next-line no-unused-vars
    addMarker: returnFalse,

    /**
     * @method Phaser.Sound.NoAudioSound#updateMarker
     * @since 3.0.0
     *
     * @param {Phaser.Types.Sound.SoundMarker} marker - Marker object with updated values.
     *
     * @return {boolean} false
     */
    // eslint-disable-next-line no-unused-vars
    updateMarker: returnFalse,

    /**
     * @method Phaser.Sound.NoAudioSound#removeMarker
     * @since 3.0.0
     *
     * @param {string} markerName - The name of the marker to remove.
     *
     * @return {null} null
     */
    removeMarker: returnNull,

    /**
     * @method Phaser.Sound.NoAudioSound#play
     * @since 3.0.0
     *
     * @param {(string|Phaser.Types.Sound.SoundConfig)} [markerName=''] - If you want to play a marker then provide the marker name here. Alternatively, this parameter can be a SoundConfig object.
     * @param {Phaser.Types.Sound.SoundConfig} [config] - Optional sound config object to be applied to this marker or entire sound if no marker name is provided. It gets memorized for future plays of current section of the sound.
     *
     * @return {boolean} false
     */
    play: returnFalse,

    /**
     * @method Phaser.Sound.NoAudioSound#pause
     * @since 3.0.0
     *
     * @return {boolean} false
     */
    pause: returnFalse,

    /**
     * Resumes the sound.
     *
     * @method Phaser.Sound.NoAudioSound#resume
     * @since 3.0.0
     *
     * @return {boolean} false
     */
    resume: returnFalse
});

module.exports = NoAudioSound;
