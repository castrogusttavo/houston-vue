
<template>
  <Icon :iconName="'heading-04'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Heading04Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'heading-04'
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
