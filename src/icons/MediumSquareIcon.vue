
<template>
  <Icon :iconName="'medium-square'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'MediumSquareIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'medium-square'
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
