
<template>
  <Icon :iconName="'drooling'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'DroolingIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'drooling'
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
