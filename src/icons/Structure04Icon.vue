
<template>
  <Icon :iconName="'structure-04'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Structure04Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'structure-04'
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
