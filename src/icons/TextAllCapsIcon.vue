
<template>
  <Icon :iconName="'text-all-caps'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'TextAllCapsIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'text-all-caps'
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
