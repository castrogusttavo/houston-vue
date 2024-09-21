
<template>
  <Icon :iconName="'infinity-square'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'InfinitySquareIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'infinity-square'
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
