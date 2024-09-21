
<template>
  <Icon :iconName="'dates'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'DatesIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'dates'
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
