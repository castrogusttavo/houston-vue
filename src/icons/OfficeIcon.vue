
<template>
  <Icon :iconName="'office'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'OfficeIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'office'
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
