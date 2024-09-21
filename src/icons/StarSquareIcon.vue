
<template>
  <Icon :iconName="'star-square'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'StarSquareIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'star-square'
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
