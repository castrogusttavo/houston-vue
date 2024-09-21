
<template>
  <Icon :iconName="'pointing-right-06'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'PointingRight06Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'pointing-right-06'
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
