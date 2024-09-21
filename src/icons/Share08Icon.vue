
<template>
  <Icon :iconName="'share-08'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Share08Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'share-08'
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
