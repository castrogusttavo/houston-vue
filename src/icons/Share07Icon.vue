
<template>
  <Icon :iconName="'share-07'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Share07Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'share-07'
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
