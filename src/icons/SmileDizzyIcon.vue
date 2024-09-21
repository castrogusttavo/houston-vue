
<template>
  <Icon :iconName="'smile-dizzy'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SmileDizzyIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'smile-dizzy'
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
