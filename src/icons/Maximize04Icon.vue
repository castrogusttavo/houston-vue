
<template>
  <Icon :iconName="'maximize-04'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Maximize04Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'maximize-04'
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
