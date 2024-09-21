
<template>
  <Icon :iconName="'share-03'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Share03Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'share-03'
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
