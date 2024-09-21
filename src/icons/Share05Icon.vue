
<template>
  <Icon :iconName="'share-05'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Share05Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'share-05'
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
