
<template>
  <Icon :iconName="'roller-skate'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'RollerSkateIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'roller-skate'
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
