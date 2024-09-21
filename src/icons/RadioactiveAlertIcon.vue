
<template>
  <Icon :iconName="'radioactive-alert'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'RadioactiveAlertIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'radioactive-alert'
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
