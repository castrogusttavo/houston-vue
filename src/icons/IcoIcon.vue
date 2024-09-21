
<template>
  <Icon :iconName="'ico'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'IcoIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'ico'
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
