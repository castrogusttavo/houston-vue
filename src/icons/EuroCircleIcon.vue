
<template>
  <Icon :iconName="'euro-circle'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'EuroCircleIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'euro-circle'
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
