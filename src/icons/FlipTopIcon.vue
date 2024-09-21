
<template>
  <Icon :iconName="'flip-top'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'FlipTopIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'flip-top'
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
