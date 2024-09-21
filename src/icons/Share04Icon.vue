
<template>
  <Icon :iconName="'share-04'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Share04Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'share-04'
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
