
<template>
  <Icon :iconName="'locker-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Locker01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'locker-01'
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
