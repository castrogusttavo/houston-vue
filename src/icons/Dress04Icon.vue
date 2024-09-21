
<template>
  <Icon :iconName="'dress-04'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Dress04Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'dress-04'
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
