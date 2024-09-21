
<template>
  <Icon :iconName="'kid'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'KidIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'kid'
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
