
<template>
  <Icon :iconName="'play-square'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'PlaySquareIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'play-square'
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
