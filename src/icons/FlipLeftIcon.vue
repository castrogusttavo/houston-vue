
<template>
  <Icon :iconName="'flip-left'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'FlipLeftIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'flip-left'
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
