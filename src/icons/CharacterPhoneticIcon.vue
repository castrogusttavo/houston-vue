
<template>
  <Icon :iconName="'character-phonetic'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CharacterPhoneticIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'character-phonetic'
    },
    ...Icon.props
  },
  computed: {
    props() {
      return { ...this.$props };
    }
  }
};
</script>
