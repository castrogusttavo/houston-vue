
<template>
  <Icon :iconName="'birthday-cake'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'BirthdayCakeIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'birthday-cake'
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
