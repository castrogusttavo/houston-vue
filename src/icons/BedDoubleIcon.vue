
<template>
  <Icon :iconName="'bed-double'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'BedDoubleIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'bed-double'
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
