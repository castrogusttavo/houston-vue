
<template>
  <Icon :iconName="'twitter-square'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'TwitterSquareIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'twitter-square'
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
