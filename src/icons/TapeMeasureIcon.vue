
<template>
  <Icon :iconName="'tape-measure'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'TapeMeasureIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'tape-measure'
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
