
<template>
  <Icon :iconName="'album-not-found-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'AlbumNotFound01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'album-not-found-01'
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
