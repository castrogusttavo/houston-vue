
<template>
  <Icon :iconName="'curling'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CurlingIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'curling'
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
