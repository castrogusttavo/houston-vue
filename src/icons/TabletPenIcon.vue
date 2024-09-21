
<template>
  <Icon :iconName="'tablet-pen'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'TabletPenIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'tablet-pen'
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
