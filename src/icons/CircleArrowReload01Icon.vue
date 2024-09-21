
<template>
  <Icon :iconName="'circle-arrow-reload-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CircleArrowReload01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'circle-arrow-reload-01'
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
