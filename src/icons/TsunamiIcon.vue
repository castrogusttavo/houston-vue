
<template>
  <Icon :iconName="'tsunami'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'TsunamiIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'tsunami'
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
