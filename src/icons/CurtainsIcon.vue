
<template>
  <Icon :iconName="'curtains'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CurtainsIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'curtains'
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
