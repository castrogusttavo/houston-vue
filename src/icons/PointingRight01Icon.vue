
<template>
  <Icon :iconName="'pointing-right-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'PointingRight01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'pointing-right-01'
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
