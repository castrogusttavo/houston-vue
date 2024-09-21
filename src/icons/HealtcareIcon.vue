
<template>
  <Icon :iconName="'healtcare'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'HealtcareIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'healtcare'
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
