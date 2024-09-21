
<template>
  <Icon :iconName="'file-star'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'FileStarIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'file-star'
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
